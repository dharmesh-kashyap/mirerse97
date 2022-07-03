const TermsOfService = () => {
  return (
    <div className="py-8 px-6 md:px-16 md:py-10 bg-gray-100 text-lg">
      <h1 className="text-3xl text-center font-semibold mb-2">
        Terms of Service
      </h1>
      <h4 className="text-sm text-gray-600 mb-8 text-center">
        Last Revised: 2021-09-23
      </h4>
      <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Terms kaun padhta hai ?</span>
                <span className="block text-pink-600"> Agree and ignore</span>
              </h1>
            </div>  
         </div>
    </div>
  );
};

export function getServerSideProps() {
  return { props: { title: 'Terms of Service for Driwwwle' } };
}

export default TermsOfService;
