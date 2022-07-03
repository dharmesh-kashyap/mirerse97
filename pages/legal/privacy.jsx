const PrivacyPolicy = () => {
  return (
    <div className="py-8 px-6 md:px-16 md:py-10 bg-gray-100 text-lg">
      <h1 className="text-3xl text-center font-semibold mb-2">
        Privacy Policy
      </h1>
      <h4 className="text-sm text-gray-600 mb-8 text-center">
        Last Revised: 2022-04-18
      </h4>
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:px-6">
            <div className="text-center">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Do whatever you want</span>
                <span className="block text-pink-600"> break the rules</span>
              </h1>
            </div>  
         </div>
    </div>
  );
};

export function getServerSideProps() {
  return { props: { title: 'Privacy Policy of Driwwwle' } };
}

export default PrivacyPolicy;
