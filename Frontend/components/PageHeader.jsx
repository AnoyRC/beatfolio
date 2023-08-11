import Avatar from './profile/Avatar';
import PageTitle from './ui/PageTitle';
import SearchBox from './ui/SearchBox';

const PageHeader = ({ title }) => {
  return (
    <section className="flex items-center justify-between px-10 py-4 bg-[#1c1c1c]/80 backdrop-blur-sm">
      <PageTitle title={title} />

      <SearchBox />

      <Avatar profilePhoto="" name="" />
    </section>
  );
};

export default PageHeader;
