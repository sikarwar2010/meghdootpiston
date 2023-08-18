import React from "react";

const customers = [
    { id: 1, name: "Andoria" },
    { id: 2, name: "Ajit" },
    { id: 3, name: 'Armstrong Sidley' },
    { id: 4, name: 'Austin BMC' },
    { id: 5, name: 'Bajaj' },
    { id: 6, name: 'Bedford' },
    { id: 7, name: 'Belarus' },
    { id: 8, name: 'Buston' },
    { id: 9, name: 'Bukh' },
    { id: 10, name: 'Case' },
    { id: 11, name: 'Caterpillar' },
    { id: 12, name: 'Cooper' },
    { id: 13, name: 'Cummins' },
    { id: 14, name: 'DAF' },
    { id: 15, name: 'David Brown' },
    { id: 16, name: 'Detroit' },
    { id: 17, name: 'Deutz' },
    { id: 18, name: 'Daihatshu' },
    { id: 19, name: 'Dongfeng' },
    { id: 20, name: 'Dorman' },
    { id: 21, name: 'Eicher' },
    { id: 22, name: 'EKM' },
    { id: 23, name: 'Escort' },
    { id: 24, name: 'Fendt' },
    { id: 25, name: 'Ford' },
    { id: 26, name: 'Fiat' },
    { id: 27, name: 'FordSon' },
    { id: 28, name: 'Fortschritt(IFA)' },
    { id: 29, name: 'Gardner' },
    { id: 30, name: 'Hatz' },
    { id: 31, name: 'Hindustan' },
    { id: 32, name: 'Honda' },
    { id: 33, name: 'IFA' },
    { id: 34, name: 'International(IHC)' },
    { id: 35, name: 'Indec' },
    { id: 36, name: 'Izumi' },
    { id: 37, name: 'Iveco' },
    { id: 38, name: 'JCB' },
    { id: 39, name: 'JEEP' },
    { id: 40, name: 'Jenbach' },
    { id: 41, name: 'John Deere' },
    { id: 42, name: 'KHD' },
    { id: 43, name: 'Kia' },
    { id: 44, name: 'Kirloskar' },
    { id: 45, name: 'Komatsu' },
    { id: 46, name: 'Kubota' },
    { id: 47, name: 'Land Rover' },
    { id: 48, name: 'Lister' },
    { id: 49, name: 'Lombardini' },
    { id: 50, name: 'Mack' },
    { id: 51, name: 'Man' },
    { id: 52, name: 'Man Supercharge' },
    { id: 53, name: 'Massey Ferguson' },

];

const customerlists = [
    { id: 54, name: 'Mazda' },
    { id: 55, name: 'Medaws' },
    { id: 56, name: 'Midland' },
    { id: 57, name: 'Mirless' },
    { id: 58, name: 'Mitsubishi' },
    { id: 59, name: 'Mercedes' },
    { id: 60, name: 'MTZ' },
    { id: 61, name: 'Moskvich' },
    { id: 62, name: 'MWM' },
    { id: 63, name: 'Navistar' },
    { id: 64, name: 'New Holland' },
    { id: 65, name: 'Nissan' },
    { id: 66, name: 'Perkins' },
    { id: 67, name: 'Petter' },
    { id: 68, name: 'Peugeot' },
    { id: 69, name: 'Piaggio' },
    { id: 70, name: 'Renault' },
    { id: 71, name: 'Rotex' },
    { id: 72, name: 'Rumania' },
    { id: 73, name: 'Russian' },
    { id: 74, name: 'Rumania UTB' },
    { id: 75, name: 'Ruston' },
    { id: 76, name: 'Robson RC' },
    { id: 77, name: 'Robin' },
    { id: 78, name: 'SAME/Lamborghini' },
    { id: 79, name: 'Samofa' },
    { id: 80, name: 'Santro' },
    { id: 81, name: 'Saviem' },
    { id: 82, name: 'Scoda' },
    { id: 83, name: 'Sendling' },
    { id: 84, name: 'Shibaura' },
    { id: 85, name: 'Slavia' },
    { id: 86, name: 'Scania' },
    { id: 87, name: 'Sonalika' },
    { id: 88, name: 'Steyr' },
    { id: 89, name: 'Suzuki' },
    { id: 90, name: 'Swaraj' },
    { id: 91, name: 'Tara Bushi' },
    { id: 92, name: 'Tata' },
    { id: 93, name: 'Tiger' },
    { id: 94, name: 'Toyota' },
    { id: 95, name: 'Tatra' },
    { id: 96, name: 'Tiger' },
    { id: 97, name: 'TVS' },
    { id: 98, name: 'Universal (UTB)' },
    { id: 99, name: 'Ursus' },
    { id: 100, name: 'Volvo' },
    { id: 101, name: 'Volvo PENTA' },
    { id: 102, name: 'Volkswagen' },
    { id: 103, name: 'VM' },
    { id: 104, name: 'Yamaha' },
    { id: 105, name: 'Yanmar' },
    { id: 106, name: 'Vespa' },
    { id: 107, name: 'Zetor' },
]

const CustomerList = () => {

    return (
        <div>
            <section className="py-8 lg:container mx-auto px-5">
                <h1 className="mt-4 text-center text-2xl font-bold dark:text-white md:text-4xl capitalize mb-5">
                    Diesel Engines, Tractors, Automobiles, Trucks, Marine Engines
                </h1>
                <div className="grid lg:grid-rows-6 lg:grid-flow-col md:grid-rows-3 md:grid-flow-col gap-4 auto-cols-auto py-5 px-10 overflow-hidden">
                    {customers.map((item) => (
                        <div key={item.id}>
                            <ul className="space-y-3 text-sm overflow-hidden">
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        {item.name}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
                <div className="grid lg:grid-rows-6 lg:grid-flow-col md:grid-rows-3 md:grid-flow-col gap-4 auto-cols-auto py-5 px-10 overflow-hidden">
                    {customerlists.map((item) => (
                        <div key={item.id}>
                            <ul className="space-y-3 text-sm overflow-hidden">
                                <li className="flex space-x-3">
                                    <svg
                                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    <span className="text-gray-800 dark:text-gray-400">
                                        {item.name}
                                    </span>
                                </li>
                            </ul>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default CustomerList;
