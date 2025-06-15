interface StatisticProgressBarProps {
    title: string;
    values: {
      value: number;
      description: string;
      backgroundColor: string;
      textColor: string;
    }[]
}

const StatisticProgressBar = (props: StatisticProgressBarProps) => {

    const calculatePercentage = (value: number, values: number[]): number => {
        const sum = values.reduce((acc, curr) => acc + curr, 0);
        return (value / sum) * 100;
    }

    return (
        <div className="flex flex-col gap-2 StatisticProgressBar">
            <h3 className='text-lg'>{props.title}</h3>
            <div className='flex rounded-2xl px-2 py-1 bg-amber-100 gap-1 w-full'>
                {props.values.map((value) => (
                    <div
                        key={value.description}
                        title={value.description}
                        style={{
                            color: value.textColor,
                            backgroundColor: value.backgroundColor,
                            flexBasis: `${calculatePercentage(value.value, props.values.map((v) => v.value)).toFixed(2)}%`
                        }}
                        className='rounded-xl px-4 py-2 font-bold transition-all duration-200 hover:opacity-90 cursor-default'
                    >
                        {calculatePercentage(value.value, props.values.map((v) => v.value)).toFixed(0)}%
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2">
                {props.values.map((value) => (
                    <div key={value.backgroundColor} className="flex items-center gap-2">
                        <div
                            style={{
                                backgroundColor: value.backgroundColor,
                            }}
                            className={`h-4 w-4 rounded-full`}>
                        </div>
                        <span>{value.description}</span>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatisticProgressBar;