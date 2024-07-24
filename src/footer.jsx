function Footer() {
    return(
        <footer className="container mt-4">
            <div className="rounded-lg border lg:border-none lg:bg-gray-50 border-gray-50 flex flex-col lg:flex-row-reverse items-center px-8 py-12 gap-8">
                <a href="#" className="text-xl font-light font-display text-gray-500 hover:text-gray-900">Documentation</a>

                <div className="flex gap-8 text-xl">
                    <a href="#" className="text-gray-500 hover:text-gray-900"> <i className="fa-brands fa-twitter"/></a>

                    <a href="#" className="text-gray-500 hover:text-gray-900"> <i className="fa-brands fa-github"/></a>
                </div>

                <a href="#" className="flex gap-2 items-center flex-1">
                    <img className="object-center max-w-12 max-h-12" src="./assets/asset 0.png" alt="Logo" />
                
                    <span className="text-lg font-semibold font-display">My Landing Page</span>
                </a>
            </div>

            <div id="sub-footer" className="flex flex-col gap-4 items-center justify-center my-12">
                <div className="flex gap-2 items-center">
                    <img src="./assets/asset 54.svg" className="w-4 h-4"/>

                    <p className="text-sm text-gray-600">A Y combinator company</p>
                </div>

                <div className="text-sm text-gray-400">© 2024 ToDesktop, Inc. All rights reserved.</div>
            </div>
        </footer>
    );
}
export default Footer