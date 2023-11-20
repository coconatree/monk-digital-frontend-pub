import { AxiosResponse } from "axios";

/** 
	Utility functions used in the application
*/

export const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};

export const checkResponseOkAxios = (response: AxiosResponse<any, any>) => {
	if (response.status !== 200) {
		throw new Error("Request failed")
	}
	return response
}

export const checkResponseOkFecth = (response: Response) => {
	if (!response.ok) {
		throw new Error("Request failed")
	}
	return response
}

export const convertArryaBufferToAudioBlob = (buffer: ArrayBuffer) => {
	if (buffer === null) {
		throw new Error("Response is null")
	}
	return new Blob([buffer], {
		type: "audio/mpeg"
	})
}

/**
	Used to convert the email validation tokens '%' characters back to '.' 
*/
export const replaceAll = (str: string, find: string, replace: string) => {
	return str.replace(new RegExp(find, 'g'), replace);
}
