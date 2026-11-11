"""Upload dist over explicit FTPS without deleting existing hosting files."""

import os
import posixpath
import ssl
from ftplib import FTP_TLS, error_perm
from pathlib import Path


def deploy():
    names = ('FTP_HOST', 'FTP_USER', 'FTP_PASSWORD', 'FTP_DIR')
    if any(not os.environ.get(name, '').strip() for name in names):
        raise RuntimeError('Missing FTP configuration. See HOSTINGER.md.')
    destination = os.environ['FTP_DIR'].strip()
    if any(part == '..' for part in destination.split('/')):
        raise ValueError('FTP_DIR must not contain parent directory references.')
    if '\r' in destination or '\n' in destination:
        raise ValueError('Invalid FTP directory.')
    build = Path('dist')
    if not (build / 'index.html').is_file():
        raise RuntimeError('Build dist/index.html before deploying.')

    # Upload assets before switching the entry page to the new build.
    files = sorted(
        (path for path in build.rglob('*') if path.is_file()),
        key=lambda path: (path == build / 'index.html', path.as_posix()),
    )
    with FTP_TLS(context=ssl.create_default_context(), timeout=60) as ftp:
        ftp.connect(os.environ['FTP_HOST'].strip(), 21)
        ftp.login(os.environ['FTP_USER'], os.environ['FTP_PASSWORD'])
        ftp.prot_p()
        # The configured directory must already exist, preventing silent typos.
        ftp.cwd(destination)
        root = ftp.pwd()
        for path in files:
            relative = path.relative_to(build)
            ftp.cwd(root)
            for part in relative.parts[:-1]:
                try:
                    ftp.cwd(part)
                except error_perm:
                    ftp.mkd(part)
                    ftp.cwd(part)
            temporary = f'.{relative.name}.deploying'
            with path.open('rb') as source:
                ftp.storbinary(f'STOR {temporary}', source)
            ftp.rename(temporary, relative.name)
            print(f'Uploaded {posixpath.join(*relative.parts)}', flush=True)
    print('Deployment complete. Existing server files were preserved.')


if __name__ == '__main__':
    deploy()
