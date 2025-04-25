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
        <div className="StatisticProgressBar">
            <h3 className='text-lg'>{props.title}</h3>
            <div className='flex rounded-2xl px-2 py-1 bg-amber-100 gap-1 w-full'>
                {props.values.map((value) => (
                    <div
                        key={value.description}
                        style={{
                            color: value.textColor,
                            backgroundColor: value.backgroundColor,
                            flexBasis: `${calculatePercentage(value.value, props.values.map((v) => v.value)).toFixed(2)}%`
                        }}
                        className='rounded-xl px-4 py-2 bg-amber-600 font-bold'>
                        {calculatePercentage(value.value, props.values.map((v) => v.value)).toFixed(0)}%
                    </div>
                ))}
            </div>
        </div>
    )
}

export default StatisticProgressBar;