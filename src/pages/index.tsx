import { UploadForm } from '@/components/UploadForm';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';

const Index = () => {
  return (
    <Main
      meta={
        <Meta
          title="Triangle problem"
          description=" A web app that calculate the maximum total from top to bottom in a text file"
        />
      }
    >
      <UploadForm />
    </Main>
  );
};

export default Index;
