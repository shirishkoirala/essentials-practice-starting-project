import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ userInput }) {
    const reslutsData = calculateInvestmentResults(userInput);
    const initialInvestment = reslutsData[0].valueEndOfYear - reslutsData[0].interest - reslutsData[0].annualInvestment;
    return <table id="result">
        <thead>
            <tr>
                <th>Year</th>
                <th>Investment Value</th>
                <th>Interest (Year)</th>
                <th>Total Interest</th>
                <th>Investment Capital</th>
            </tr>
        </thead>
        <tbody>
            {reslutsData.map(yearData => {
                const totalInterestValue = yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment;
                const totalMaountInvested = yearData.valueEndOfYear - totalInterestValue;

                return <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterestValue)}</td>
                    <td>{formatter.format(totalMaountInvested)}</td>
                </tr>
            })}
        </tbody>
    </table>;
}