import React from "react";
import { useForm } from "react-hook-form";
import { IInsertBox } from "../interfaces/InsertBox.interface";
import { ErrorMsg, Insert, InsertForm } from "../styleds/InserBox.styled";

function InsertBox({sectionName}:IInsertBox) {
    const { register, handleSubmit, formState:{ errors } } = useForm();

    const OnSubmit = (data:any) => {
        console.log(data,'제출!')
    }
    console.log(errors[`${sectionName}_insert`]);
    return (
        <InsertForm onSubmit={handleSubmit(OnSubmit)}>
            <Insert placeholder="Insert content" {...register(`${sectionName}_insert`,
            {
                required: {
                    value: true,
                    message: "white space is not correct"
                }
            })} />
            {errors[`${sectionName}_insert`] ? <ErrorMsg>{errors[`${sectionName}_insert`].message}!</ErrorMsg> : null}
        </InsertForm>
    )
}

export default React.memo(InsertBox);