import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';


const Footer: React.FC = () => {
  const defaultMessage = '还不知道能不能出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Ant Design Pro',
          title: '新用户注册',
          href: '/user/register',
          blankTarget: false,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/teachershuang',
          blankTarget: true,
        },
        {
          key: 'Ant Design',
          title: '导师-赵旭东',
          href: 'https://ccec.nefu.edu.cn/info/1039/1753.htm',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
