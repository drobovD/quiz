import React from "react";

export default function Main() {
    return (
        <div className="greeting">
            <div className="greeting-text">
                <p id="first-paragraph">
                    Доброго времени суток!
                </p>
                <p id="second-paragraph">
                    Вы попали на викторину, которая поможет вам определить, насколько вы знаете... меня, автора данной викторины, Дениса Дробова.
                </p>
                <p id="third-paragraph">
                    Викторина состоит из 10 вопросов, цена каждого - 1 балл.
                </p>
                <p id="fourth-paragraph">
                    Проверим ваши знания обо мне!
                </p>
            </div>
            <div className="greeting-image"/>
        </div>
    );
}