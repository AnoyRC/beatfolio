import Avatar from './profile/Avatar';
import PageTitle from './ui/PageTitle';
import SearchBox from './ui/SearchBox';

const PageHeader = ({ title, isGrid }) => {
  return (
    <section
      className={`flex items-center justify-between px-10 py-4 backdrop-blur-sm bg-[#1c1c1c]/60 sticky top-0 z-40 ${
        isGrid ? 'col-span-9' : ''
      }`}
    >
      <PageTitle title={title} />

      <SearchBox />

      <Avatar profilePhoto="" name="" />
    </section>
  );
};

export default PageHeader;
