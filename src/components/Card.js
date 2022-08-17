import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Done from './Done';
import frontcard from '../images/bg-card-front.png';
import backcard from '../images/bg-card-back.png';
import './Card.css';
const Card = () => {
    const [confirm, setConfirm] = useState(false);
    const [forms, setForms] = useState({
        CardHolderName: '',
        CardHolderDetails: '',
        EXP: '',
        cvc: '',
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const handlechange = (event) => {
        const { name, value } = event.target;
        setForms((prevstate) => ({
            ...prevstate,
            [name]: value,
        }));
    };
    const onSubmit = () => {
        setConfirm(true);
    };

    console.log(forms);
    return (
        <div className="main-card-wrapper">
            <div className="left-side-card">
                <img className="card-front" src={frontcard} alt="#" />
                <h2>{forms.CardHolderName}</h2>
                <br />
                <img className="card-back" src={backcard} alt="#" />
                <h2>{forms.CardHolderDetails}</h2>
                {/* for left side of the card */}
            </div>
            {confirm ? (
                <Done />
            ) : (
                <div className="right-side-card">
                    <form
                        className="main-form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <input
                            onChange={handlechange}
                            name="CardHolderName"
                            
                            className="form-name"
                            placeholder="CardHolder Name"
                            {...register('CardHolderName', {
                                required: true,
                            })}
                        />
                        {errors.CardHolderName?.type === 'required' &&
                            'CardHolder Name is required'}
                        <br />
                        <input
                            className="form-name"
                
                            onChange={handlechange}
                            name="CardHolderDetails"
                            placeholder="CardHolder Details"
                            {...register('CardHolderDetails', {
                                required: true,
                            })}
                        />
                        {errors.CardHolderDetails?.type === 'required' &&
                            'CardHolder Details is required'}
                        <br />
                        <input
                            className="form-info"
                            onChange={handlechange}
                            name="EXP"
                            
                            placeholder="EXP. DATE (MM/YY)"
                            {...register('EXP', { required: true }, { min: 2 })}
                        />
                        {errors.EXP?.type === 'required' &&
                            'EXP.DATE (MM/YY) is required'}
                        <br />
                        <input
                            className="form-cvc"
                            onChange={handlechange}
                            placeholder="CVC"
                            name="cvc"
                            type="number"
                            {...register(
                                'cvc',
                                { required: true },
                                {
                                    min: 3,
                                }
                            )}
                        />
                        {errors.cvc?.type === 'required' && 'CVC is required'}
                        <br />
                        <input
                            className="form-button"
                            onSubmit={onSubmit}
                            type="submit"
                            value="Confirm"
                            text="Confirm"
                        />
                    </form>
                </div>
            )}
        </div>
    );
};

export default Card;
