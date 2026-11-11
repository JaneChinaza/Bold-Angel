import os
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from deploy_hostinger import deploy


class DeployTests(unittest.TestCase):
    def test_uploads_assets_before_entry_page_without_deleting_files(self):
        original = Path.cwd()
        with tempfile.TemporaryDirectory() as directory:
            try:
                os.chdir(directory)
                Path('dist/assets').mkdir(parents=True)
                Path('dist/assets/app.js').write_text('app')
                Path('dist/index.html').write_text('index')
                settings = dict(FTP_HOST='test.invalid', FTP_USER='test',
                                FTP_PASSWORD='test', FTP_DIR='/public_html/')
                with patch.dict(os.environ, settings), patch('deploy_hostinger.FTP_TLS') as connection:
                    ftp = connection.return_value.__enter__.return_value
                    ftp.pwd.return_value = '/public_html'
                    deploy()
                    self.assertEqual(ftp.rename.call_args_list[-1].args,
                                     ('.index.html.deploying', 'index.html'))
                    self.assertEqual(ftp.storbinary.call_count, 2)
                    ftp.prot_p.assert_called_once()
                    ftp.delete.assert_not_called()
                    ftp.rmd.assert_not_called()
            finally:
                os.chdir(original)

    def test_rejects_parent_directory_paths(self):
        settings = dict(FTP_HOST='test.invalid', FTP_USER='test',
                        FTP_PASSWORD='test', FTP_DIR='/public_html/../')
        with patch.dict(os.environ, settings), self.assertRaises(ValueError):
            deploy()


if __name__ == '__main__':
    unittest.main()
