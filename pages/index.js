import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div lang="en" className={styles.container}>
            <Head lang="en">
                <title>Travel Jinni</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css"></link>
            </Head>

            <div className="flex md:flex-row flex-col  md:justify-between w-11/12 mx-auto py-4">
                <div>
                    <p className="text-sm text-center md:text-left">Remaining Days to my Trip</p>

                    <div className="flex justify-center md:justify-items-start mx-auto">
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>10</h2>
                            <p className={styles.txtSpan}>Weeks</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Days</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>45</h2>
                            <p className={styles.txtSpan}>Hours</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>25</h2>
                            <p className={styles.txtSpan}>Minutes</p>
                        </div>
                        <div className="flex-col text-center mx-1 w-10">
                            <h2 className={styles.pFlexT}>06</h2>
                            <p className={styles.txtSpan}>Seconds</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center text-sm py-5">
                    <p className="px-2">My Trips</p>
                    <div className="flex">
                        <p className="px-2">|</p>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span>EN (S)</span>
                    </div>
                </div>
            </div>
            <div className="border-t border-gray-500"></div>
            <div className="flex flex-col-reverse md:flex-row items-center md:items-start px-5 sm:px-14 py-4 md:mb-16">
                <div className="w-full md:w-60  my-8 md:mt-0">
                    <h1 className="font-bold text-xl font-serif py-1 text-center md:text-left">
                        Six Days In Dubai
                    </h1>
                    <ul className="flex flex-row justify-center items-center md:flex-col md:items-start">
                        <li className="w-8 h-8 flex items-center justify-center">FEB</li>
                        <li className="bg-opacity-50 bg-black text-yellow-300 w-8 h-8 rounded-full flex items-center justify-center border-yellow-300 border-2 text-sm font-bold font-mono">
                            15
                        </li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">16</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">17</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">18</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">19</li>
                        <li className="w-8 h-10 flex items-center justify-center text-xs">20</li>
                    </ul>
                </div>
                <div className="w-full md:w-3/5 max-w-md md:ml-40">
                    <div className="flex flex-col md:flex-row items-center pt-24">
                        <div className="rounded-full w-20 h-20 p-2 mb-5 md:mb-2 flex items-center justify-center bg-white">
                            <img
                                alt="Hillton logo"
                                src="/logo.png"
                                className="h-18 w-18 ml-1 rounded-full"
                            />
                        </div>
                        <div className="md:ml-4 flex-grow text-center border border-white">
                            <h1 className="text-3xl px-1 md:text-3xl lg:text-5xl font-bold font-mono tracking-wide py-2">
                                HILTON HOTEL
                            </h1>
                            <h2 className="bg-white text-black text-base md:text-sm lg:text-lg font-medium font-serif py-2 px-1">
                                POWERED BY TRAVEL JINNI
                            </h2>
                        </div>
                    </div>
                    <div className="w-full  mx-auto text-center border-white border mt-2 pt-8 px-4 bg-gray-400 bg-opacity-10 blur-filter rounded-md">
                        <h1 className="text-2xl lg:text-5xl font-serif font-bold pb-5 px-4">
                            Your Trip Awaits You!
                        </h1>
                        <p className="text-sm pb-5">
                            We have taken some time to help plan your trip to make it a memmorable
                            one. Access your calender for even more things you can do on your trip.
                        </p>
                        <button className="bg-yellow-300 w-full border-black border-2 text-black font-bold py-2 mb-5">
                            ACCESS CALENDAR
                        </button>
                    </div>
                </div>
            </div>
            <div className="floater fixed flex flex-col right-8 bottom-36">
                <p className="flex items-center justify-center mb-4">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        className="h-5 w-5"
                        viewBox="0 0 16 16">
                        <path
                            fill="#fff"
                            d="M8 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
                    </svg>
                </p>
                <p className="h-7 w-7 text-black bg-white rounded-full flex items-center justify-center font-medium">
                    ?
                </p>
            </div>
            <div className="h-24 w-full bg-red-900 bg-blend-darken opacity-50 mt-auto"></div>
        </div>
    );
}
