import React from 'react';
import { useForm } from 'react-hook-form';
import DashboardHeader from '../../Shared/DashboardHeader/DashboardHeader';

const AddService = () => {
    const { register, handleSubmit, errors } = useForm();

    const onSubmit = data => {
        console.log(data);
    }

    return (
        <>
            <DashboardHeader displayOption="Add Service"></DashboardHeader>
            <form className="p-5 bg-white rounded m-2" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group row">
                        <div className="col-6">
                            <div className="form-group">
                                <label htmlFor="servicename">Service Name</label>
                                <input type="text" ref={register({ required: true })} name="servicename" placeholder="Name" className="form-control form-control-lg"/>
                                {errors.servicename && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Service Description</label>
                                <textarea rows={5} ref={register({ required: true })} name="description" placeholder="Description" className="form-control form-control-lg"/>
                                {errors.description && <span className="text-danger">This field is required</span>}
                            </div>
                        </div>
                        <div className="col-6">
                            <label htmlFor="projectfile">Service File</label>
                            <button className="btn btn-outline-success btn-block"><input ref={register({ required: true })} name="projectfile" className="form-control bg-transparent" placeholder="Upload project file" type="file" /></button>
                            {errors.projectfile && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-dark px-5">Send</button>
                    </div>
                </form>
        </>
    );
};

export default AddService;