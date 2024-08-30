# How to add a new translatable term

1. Add a new term into `dictionary.json` (e.g. "marketplace.title": "Welcome" )

2. Use the term in line

```
const { t } = useAppTranslation()

return <p>{t("marketplace.title)}</p>
```

_Do not update en.json - this is a file we use to track which terms have been translated_

# How to add new Languages

1. In `dictionary.ts` add your language code in type `LanguageCode` (see [here](https://docs.aws.amazon.com/translate/latest/dg/what-is-languages.html#what-is-languages-supported) for supported languages)

2. In `languageDetails` add details for the flag image, flag alt and the Language name

3. Run `yarn translate` to generate the translation file for your new language. (you will need AWS credentials to run this)

4. Import your new json file in a similar format to other translation files

5. in `resources` add the translation resource you just generated

Note: If your language requires certains fonts to display, approach one of the developers so that they can help you upload and apply your fonts to your language