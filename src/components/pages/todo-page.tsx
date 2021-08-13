import React,{ FC } from 'react';
import { CompleteBlock, UnCompleteBlock } from "../todo-blocks";
import { BlockMarkup } from "../block-app";

const TodoPage : FC = () => {
    return (
       <BlockMarkup>
           <UnCompleteBlock/>
           <CompleteBlock/>
       </BlockMarkup>
    );
};

export default TodoPage;