'use client'

import { createContext, useEffect, useState } from "react";
import { LocaleResources } from "./locale.type";
import { LocalStorage } from "@/data/storage-manage";

const resources = {
	"en-us": require('@/language/en-us/locale.json') as LocaleResources,
	"pt-br": require('@/language/pt-br/locale.json') as LocaleResources
};

type Languages = keyof typeof resources;

export const Locale = createContext({ translate: resources["en-us"], setLanguage: (language: Languages) => { } });

export default function LocaleProvider({ children }: { children: React.ReactNode }): JSX.Element {
	const [translate, setTranslate] = useState({} as LocaleResources);

	useEffect(() => {
		try {
			const language = getLanguage();
			setTranslate(resources[language]);
		} catch (error) {
			setTranslate(resources["en-us"]);
		}
	}, []);

	const setLanguage = (language: Languages = "en-us") => {
		setTranslate(resources[language]);
		storeLanguage(language);
	};

	return (
		<Locale.Provider value={{ translate, setLanguage }}>
			{children}
		</Locale.Provider>
	);
}

function storeLanguage(language: Languages) {
	if (getLanguage() === language) return;
	LocalStorage.instance.setItem("language", language);
}

function getLanguage(): Languages {
	const language = LocalStorage.instance.getItem("language") as Languages;
	return language;
}