import {
    FaCheck,
    FaCreditCard,
    FaRegCreditCard,
    FaTruck,
} from "react-icons/fa6";
import { RiArchiveFill, RiArchiveLine } from "react-icons/ri";

export default function Steps({ step }) {
    return (
        <ul className="steps">
            <li className="step step-neutral">
                <span className="step-icon bg-second border-0">
                    {step === 0 ? <FaTruck /> : <FaCheck />}
                </span>
                Shipping
            </li>
            <li
                className={`step before:h-1 ${step >= 1
                    ? "step-neutral before:bg-second before:border-second"
                    : "before:bg-base-100"
                    }`}
            >
                <span
                    className={`step-icon ${step >= 1 ? "bg-second border-0" : "bg-base-100"
                        }`}
                >
                    {step === 1 ? (
                        <FaCreditCard />
                    ) : step < 1 ? (
                        <FaRegCreditCard />
                    ) : (
                        <FaCheck />
                    )}
                </span>
                Payment
            </li>
            <li
                className={`step before:h-1 ${step >= 2
                    ? "step-neutral before:bg-second"
                    : "before:bg-base-100"
                    }`}
            >
                <span
                    className={`step-icon ${step >= 2 ? "bg-second border-0" : "bg-base-100"
                        }`}
                >
                    {step === 2 ? (
                        <RiArchiveFill />
                    ) : step < 2 ? (
                        <RiArchiveLine />
                    ) : (
                        <FaCheck />
                    )}
                </span>
                Confirmation
            </li>
        </ul>
    )
}
