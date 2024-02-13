import React from "react";

const chatData = [{
    sender: "Mangesh",
    message: "hey everyone!",
    timeago: "10 min ago"
},
{sender: "Magesh",
message: "hey    ccsc everyone!",
timeago: "10 min ago"},
{
    sender: "angesh",
    message: "hey asa everyone!",
    timeago: "10 min ago"
}]


const Card = ({sender, message,timeago})=>
{
return (
    <div>
        <p>{sender}</p>
        <p>{message}</p>
        <span>{timeago}</span>
    </div>
)
}
export const Chat = ()=>{
    return (
        <div>
            {
                chatData.map(obj=>
                    (
                        <Card
                    sender={obj.sender}
                    message={obj.message}
                    timeago={obj.timeago}

                    />
                    )

                )
            }
        </div>

    )
}

