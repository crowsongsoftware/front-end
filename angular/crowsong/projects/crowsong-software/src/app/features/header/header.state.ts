export type HeaderState = {
    imgStyles: string;
    imgSrc: string;
};

export const defaultState: HeaderState = {
    imgStyles: '',
    imgSrc: ''
}
export const headerState: HeaderState = {
    imgStyles: 'border-radius: 2vw 2vw 0 0',
    imgSrc: '/assets/images/logo_text_cropped.png'
};