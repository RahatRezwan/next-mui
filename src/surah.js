const fetchSurahData = async (surah) => {
    try {
        // Fetch data from the first API for Arabic text
        const response = await fetch(`http://api.alquran.cloud/v1/surah/${surah}/ar.alafasy`);
        const data = await response.json();

        // Fetch data from the second API with editions (English and Bengali)
        const secondRes = await fetch(
            `https://api.alquran.cloud/v1/surah/${surah}/editions/quran-uthmani,en.asad,bn.bengali`,
        );
        const secondData = await secondRes.json();

        // Get the Arabic ayahs from the first API response
        const arabicAyahs = data.data.ayahs;

        // Get the English and Bengali texts from the second API response
        const englishTexts = secondData.data.find(
            (edition) => edition.edition.identifier === 'en.asad',
        ).ayahs;
        const bengaliTexts = secondData.data.find(
            (edition) => edition.edition.identifier === 'bn.bengali',
        ).ayahs;

        // Combine the Arabic, English, and Bengali texts based on the ayah number
        const formattedData = arabicAyahs.reduce(
            (acc, ayah) => {
                const englishText = englishTexts.find((text) => text.number === ayah.number).text;
                const bengaliText = bengaliTexts.find((text) => text.number === ayah.number).text;

                acc.ayahs.push({
                    number: ayah.number,
                    textArabic: ayah.text,
                    textEnglish: englishText,
                    textBengali: bengaliText,
                    // numberInSurah: ayah.numberInSurah,
                    // juz: ayah.juz,
                    // manzil: ayah.manzil,
                    // page: ayah.page,
                    // ruku: ayah.ruku,
                    // hizbQuarter: ayah.hizbQuarter,
                    sajda: ayah.sajda,
                    audio: ayah.audio,
                    audioSecondary: ayah.audioSecondary,
                });

                return acc;
            },
            {
                code: data.code,
                status: data.status,
                name: data.data.name,
                englishName: data.data.englishName,
                englishNameTranslation: data.data.englishNameTranslation,
                number: data.data.number,
                numberOfAyahs: data.data.numberOfAyahs,
                revelationType: data.data.revelationType,
                audio: `https://server8.mp3quran.net/afs/${String(surah).padStart(3, '0')}.mp3`,
                ayahs: [],
            },
        );

        return formattedData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
};

export const fetchAllSurahData = async () => {
    const quran = [];

    for (let i = 1; i <= 114; i++) {
        const surahData = await fetchSurahData(i);
        quran[i] = surahData;
    }

    console.log('Formatted data:', quran);

    let d = quran.reduce((acc, item, index, arr) => {
        acc[item.number] = item;
        return acc;
    }, {});

    console.log(d);
};
