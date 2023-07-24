require("./index.css");
var $ltMAx$reactjsxruntime = require("react/jsx-runtime");
var $ltMAx$react = require("react");
var $ltMAx$reactdomclient = require("react-dom/client");










function $80b2c25acb6668aa$var$PersonCard({ friend: friend }) {
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        className: "user-info",
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("img", {
                className: "user-avatar",
                src: friend.avatar,
                alt: "Avatar"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("p", {
                        children: [
                            friend.name,
                            " ",
                            friend.last_name,
                            " ",
                            friend.invited
                        ]
                    }),
                    /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("p", {
                        children: friend.email
                    })
                ]
            })
        ]
    });
}
var $80b2c25acb6668aa$export$2e2bcd8739ae039 = $80b2c25acb6668aa$var$PersonCard;


function $0d68d45dc1c743f1$export$2e2bcd8739ae039() {
    const [listFriends, setListFriends] = (0, $ltMAx$react.useState)(JSON.parse(localStorage.getItem("listOfFriends")) || []);
    (0, $ltMAx$react.useEffect)(()=>{
        if (listFriends.length === 0) {
            async function getFriends() {
                try {
                    const getusers = await fetch("https://reqres.in/api/users");
                    const users = await getusers.json();
                    const newList = users.data.map((friend)=>({
                            id: friend.id,
                            name: friend.first_name,
                            last_name: friend.last_name,
                            email: friend.email,
                            avatar: friend.avatar,
                            invited: false
                        }));
                    localStorage.setItem("listOfFriends", JSON.stringify(newList));
                } catch (error) {
                    console.log("Error fetching friends:", error);
                }
            }
            getFriends();
        }
    }, []);
    const onChange = (id, invited)=>{
        const posiçao = listFriends.findIndex((friend)=>friend.id === id);
        listFriends[posiçao].invited = !invited;
        setListFriends([
            ...listFriends
        ]);
        localStorage.setItem("listOfFriends", JSON.stringify(listFriends));
    };
    const invited = listFriends.filter((friend)=>friend.invited);
    const notinvited = listFriends.filter((friend)=>!friend.invited);
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "header",
                children: "Invited Friends"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "user-list",
                children: invited.map((friend)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "user-card",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $80b2c25acb6668aa$export$2e2bcd8739ae039), {
                                friend: friend
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                className: "button",
                                onClick: ()=>onChange(friend.id, friend.invited),
                                children: "Desinvited"
                            })
                        ]
                    }, friend.id))
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("h1", {
                className: "header",
                children: "Not Invited"
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
                className: "user-list",
                children: notinvited.map((friend)=>/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsxs)("div", {
                        className: "user-card",
                        children: [
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $80b2c25acb6668aa$export$2e2bcd8739ae039), {
                                friend: friend
                            }),
                            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                                className: "button",
                                onClick: ()=>onChange(friend.id, friend.invited),
                                children: "Invite"
                            })
                        ]
                    }, friend.id))
            }),
            /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("button", {
                className: "button",
                onClick: ()=>localStorage.clear(),
                children: "Clear Storage"
            })
        ]
    });
}


const $da11a1101b2a894a$var$App = ()=>{
    return /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)("div", {
        children: /*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $0d68d45dc1c743f1$export$2e2bcd8739ae039), {})
    });
};
var $da11a1101b2a894a$export$2e2bcd8739ae039 = $da11a1101b2a894a$var$App;



const $4fa36e821943b400$var$container = document.getElementById("root");
const $4fa36e821943b400$var$root = (0, $ltMAx$reactdomclient.createRoot)($4fa36e821943b400$var$container);
$4fa36e821943b400$var$root.render(/*#__PURE__*/ (0, $ltMAx$reactjsxruntime.jsx)((0, $da11a1101b2a894a$export$2e2bcd8739ae039), {}));


//# sourceMappingURL=index.js.map
