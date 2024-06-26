import React from 'react';

interface CheckboxProps {
    isDone: boolean;
    onToggle: (activityId: string) => void;
    activityId: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ isDone, onToggle, activityId }) => {
    console.log(activityId);

    return (
        <div className="checkbox-container">
            <input type="checkbox" checked={isDone} onChange={() => onToggle(activityId)} />
        </div>
    );
};
