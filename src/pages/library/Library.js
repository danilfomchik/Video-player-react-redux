import React, { useEffect, useState } from "react";

import "./library.scss";

// добавление происходит без снепшота(перересовки данных), потому что пользователь потом переходит на страницу библиотеки и оно рендериться
// а вот когда идет удаление надо сразу перересовывать

const Library = () => {
    const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const getUsers = async () => {
    //         const data = await getDocs(usersCollectionRef);

    //         data.docs.forEach((doc) => {
    //             console.log({ ...doc.data(), id: doc.id });
    //         });

    //         setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    //     };

    //     getUsers();
    // }, []);

    return (
        <div className="library">
            <p>Library:</p>
            {users.map((user) => (
                <div key={user.id}>
                    {/* <h1>{user.name}</h1> */}
                    {/* <p>{user.email}</p> */}

                    {/* <span>Liked videos:</span> */}
                    {/* {user.likedVideos.map((video, index) => (
                        <p key={index}>
                            {index + 1} {video}{" "}
                            <span
                                onClick={() =>
                                    deleteVideo(
                                        user.id,
                                        index,
                                        user.likedVideos
                                    )
                                }
                                style={{ color: "red", cursor: "pointer" }}
                            >
                                *delete*
                            </span>
                        </p>
                    ))} */}
                    {/* <button
                        onClick={() =>
                            addVideo(
                                user.id,
                                user.likedVideos,
                                "{'id': 'new video'}"
                            )
                        }
                    >
                        add new video
                    </button> */}
                    {/* <button onClick={updateUser}>updateUser</button> */}
                    {/* <hr /> */}
                </div>
            ))}
        </div>
    );
};

export default Library;
