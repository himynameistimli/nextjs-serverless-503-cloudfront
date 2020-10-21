const TestPage = ({data}) =>{
  return <div>Test Page: {data} </div>
}

export default TestPage;

export const getServerSideProps = async () => {

  return {
    props: {
      data: 'Try Refreshing This Page',
    },
  };
};
