import { useState } from "react";
import { db } from "../firebase-config";

import {
    collection,
    getDocs,
    addDoc,
    updateDoc,
    doc,
    serverTimestamp,
    onSnapshot,
    query,
    where,
    setDoc,
    arrayUnion,
    arrayRemove,
    getDoc,
} from "firebase/firestore";

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// ПРОВЕРЯТЬ ЧТО ПОЛЬЗОВАТЕЛЬ ВОШЕЛ В АККАУНТ, ТОЛЬКО ТОГДА ПОЗВОЛЯТЬ ЕМУ ВЫПОЛНЯТЬ ДЕЙСТВИЯ
// ЕСЛИ ПОЛЬЗОВАТЕЛЬ НЕ ВОШЕЛ В АККАУНТ, ПОКАЗЫВАТЬ СООБЩЕНИЕ С ПРИЗЫВОМ ВОЙТИ
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// как вариант, сделать на подобии с юзером, т.е если аутентифицырован - показывать настоящий компонент, если нет - заглушку

export const useFirebase = ({ uid }) => {
    // uid - id of a document in database
    const [data, setData] = useState([]);
    const userRef = doc(db, "users", uid);

    // calls when user sign in first time
    const onAddUserToDatabase = async (user) => {
        await setDoc(
            userRef,
            user,
            // if merge = false excited object overrides, if = true - add new fields
            { merge: true }
        );
    };

    const onAddDataToPlaylist = async (data, playlistName) => {
        // add new playlist by playlistName with data
        await updateDoc(userRef, {
            [playlistName]: arrayUnion(data),
        });
    };

    const getUserData = async (field) => {
        // const docSnap = await getDoc(userRef);

        // setData(...docSnap.data());

        onSnapshot(userRef, (doc) => {
            setData(doc.data()[field]);

            console.log("Current data: ", doc.data()[field]);
        });
    };

    // const updateUser = async () => {
    // const laRef = doc(db, "users", "LA");

    // await updateDoc(laRef, {
    //     likedVideos: [
    // {
    //     name: "Dnipro",
    //     state: "",
    //     country: "Ukraine",
    //     id: "1",
    // },
    //     ],
    // });

    // await updateDoc(laRef, {
    //     likedVideos: arrayUnion({
    //         name: "Lviv",
    //         state: "",
    //         country: "Ukraine",
    //         id: "2",
    //     }),
    // });

    // await updateDoc(frankDocRef, {
    //     "age": 13,
    //     "favorites.color": "Red" // favorites.color - updates nested object
    // });
    // если обновлять без вложеной нотации будет переписываться весь обьект
    // };

    // calls when we delete video from playlist
    // const deleteVideo = async (id, videoIndex, videosArray) => {
    //     // creates instance of a document
    //     const userDoc = doc(db, "users", id);

    //     // updated field
    //     const newVideosArray = {
    //         likedVideos: videosArray.filter((video, index) => {
    //             return videoIndex !== index;
    //         }),
    //     };

    //     await updateDoc(userDoc, newVideosArray);
    // };

    // calls when we add video from playlist
    // const addVideo = async (id, videosArray, newVideo) => {
    //     // creates instance of a document
    //     const userDoc = doc(db, "users", id);

    //     // updated field
    //     const newVideosArray = {
    //         likedVideos: [newVideo, ...videosArray],
    //     };

    //     await updateDoc(userDoc, newVideosArray);
    // };

    return {
        data,
        onAddUserToDatabase,
        onAddDataToPlaylist,
        getUserData,
    };
};
