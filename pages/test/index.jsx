const TestPage = ({data}) =>{
  return <div>Static Page<br/><br/>{data} </div>
}

export default TestPage;

export const getServerSideProps = async () => {

  return {
    props: {
      data: 'Try Refreshing This Page',
    },
  };
};
