import {planes} from "../../data/planes";
import StatisticProgressBar from "../../components/StatisticProgressBar/StatisticProgressBar";
import MapComponent from "../../components/MapComponent/MapComponent";

const DashboardPage = () => {

    return (
        <section className="grow p-2 bg-gray-200">
            <div className="w-full h-full flex flex-col p-3 bg-white shadow rounded-2xl">
                <h1 className="font-bold mb-2">Dashboard</h1>
                <div className="flex gap-4">
                    <div className='basis-2/3 p-4'>
                        <div className='w-full bg-red-100 rounded-xl'>
                            <MapComponent />
                        </div>
                    </div>
                    <div className="basis-1/3 p-4 flex flex-col">
                        <div id="statistics" className="flex flex-col gap-4">
                            <StatisticProgressBar title='Samoloty - status' values={[
                                {
                                    value: planes.filter((plane) => plane.status === 'free').length,
                                    description: '',
                                    backgroundColor: '#F9DB6D',
                                    textColor: 'black'
                                },
                                {
                                    value: planes.filter((plane) => plane.status === 'damaged').length,
                                    description: '',
                                    backgroundColor: '#FF6363',
                                    textColor: 'black'
                                },
                                {
                                    value: planes.filter((plane) => plane.status === 'rented').length,
                                    description: '',
                                    backgroundColor: '#81E7AF',
                                    textColor: 'black'
                                },
                                {
                                    value: planes.filter((plane) => plane.status === 'service').length,
                                    description: '',
                                    backgroundColor: '#BCCCDC',
                                    textColor: 'black'
                                }
                            ]}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
};

export default DashboardPage;