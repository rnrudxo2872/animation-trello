import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { ToDoAtom } from "../atoms";
import { IFormState, IInsertBox } from "../interfaces/InsertBox.interface";
import { ErrorMsg, Insert, InsertForm } from "../styleds/InserBox.styled";
import { InsertToDoValidate } from "../validations/InsertBox.validation";

function InsertBox({sectionName}:IInsertBox) {
    const BASE_NAME = `${sectionName}_insert`;
    
    const { register, handleSubmit, formState:{ errors }, setValue } = useForm<IFormState>();
    const setToDoList = useSetRecoilState(ToDoAtom)

    const OnSubmit = (data:IFormState) => {
        
        setToDoList((allToDoList) => {
            const CopyList = [...allToDoList[sectionName]];
            CopyList.push(data[BASE_NAME]);
            
            return {
                ...allToDoList,
                [sectionName] : CopyList
            }
        })
        setValue(BASE_NAME, '');
    }

    return (
        <InsertForm onSubmit={handleSubmit(OnSubmit)}>
            <Insert placeholder="Insert content" {...register(BASE_NAME, InsertToDoValidate)} />
            {errors[BASE_NAME] ? <ErrorMsg>{errors[BASE_NAME].message}!</ErrorMsg> : null}
        </InsertForm>
    )
}

export default React.memo(InsertBox);