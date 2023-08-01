import { useState, useEffect } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

const useFlip = (initialFlipState = true) => {
    const [isFlipped, setIsFlipped] = useState(initialFlipState);

    /** sets initialFlipState to the opposite */
    const flip = () => {
        setIsFlipped(isUp => !isUp)
    }

    return [isFlipped, flip]
}

const useAxios = (baseUrl) => {
    const [responses, setResponses] = useState([]);

    const addResponseData = async (restOfUrl = "") => {
        const response = await axios.get(`${baseUrl}${restOfUrl}`);
        setResponses(data => [...data, { ...response.data, id: uuid() }]);
    };

    return [responses, addResponseData];
}

export { useFlip, useAxios }