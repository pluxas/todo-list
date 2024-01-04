import React from 'react'

const GlobalSvgIcons = ({id}) => {
    switch(id) {
        case 'arrow':
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M30 16.5H11.745L20.13 8.115L18 6L6 18L18 30L20.115 27.885L11.745 19.5H30V16.5Z" fill="#1C1B1F"/>
                </svg>
            )
            break;
        case 'close':
            return (
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M18 3C9.705 3 3 9.705 3 18C3 26.295 9.705 33 18 33C26.295 33 33 26.295 33 18C33 9.705 26.295 3 18 3ZM18 30C11.385 30 6 24.615 6 18C6 11.385 11.385 6 18 6C24.615 6 30 11.385 30 18C30 24.615 24.615 30 18 30ZM18 15.885L23.385 10.5L25.5 12.615L20.115 18L25.5 23.385L23.385 25.5L18 20.115L12.615 25.5L10.5 23.385L15.885 18L10.5 12.615L12.615 10.5L18 15.885Z" fill="#49454F"/>
                </svg>
            )
            break;
        case 'edit':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M19.06 3.59L20.41 4.94C21.2 5.72 21.2 6.99 20.41 7.77L7.18 21H3V16.82L13.4 6.41L16.23 3.59C17.01 2.81 18.28 2.81 19.06 3.59ZM5 19L6.41 19.06L16.23 9.23L14.82 7.82L5 17.64V19Z" fill="#6750A4"/>
                </svg> 
            )
            break;
        case 'grid': 
            return (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18 0H2C0.9 0 0 0.9 0 2V18C0 19.1 0.9 20 2 20H18C19.1 20 20 19.1 20 18V2C20 0.9 19.1 0 18 0ZM6 18H3C2.45 18 2 17.55 2 17V14H6V18ZM6 12H2V8H6V12ZM6 6H2V3C2 2.45 2.45 2 3 2H6V6ZM12 18H8V14H12V18ZM12 12H8V8H12V12ZM12 6H8V2H12V6ZM17 18H14V14H18V17C18 17.55 17.55 18 17 18ZM18 12H14V8H18V12ZM18 6H14V2H17C17.55 2 18 2.45 18 3V6Z" fill="#6750A4"/>
</svg>

            )
            break;
        case 'list':
            return (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14H6C6.55 14 7 13.55 7 13V11C7 10.45 6.55 10 6 10H4C3.45 10 3 10.45 3 11V13C3 13.55 3.45 14 4 14ZM4 19H6C6.55 19 7 18.55 7 18V16C7 15.45 6.55 15 6 15H4C3.45 15 3 15.45 3 16V18C3 18.55 3.45 19 4 19ZM4 9H6C6.55 9 7 8.55 7 8V6C7 5.45 6.55 5 6 5H4C3.45 5 3 5.45 3 6V8C3 8.55 3.45 9 4 9ZM9 14H20C20.55 14 21 13.55 21 13V11C21 10.45 20.55 10 20 10H9C8.45 10 8 10.45 8 11V13C8 13.55 8.45 14 9 14ZM9 19H20C20.55 19 21 18.55 21 18V16C21 15.45 20.55 15 20 15H9C8.45 15 8 15.45 8 16V18C8 18.55 8.45 19 9 19ZM8 6V8C8 8.55 8.45 9 9 9H20C20.55 9 21 8.55 21 8V6C21 5.45 20.55 5 20 5H9C8.45 5 8 5.45 8 6Z" fill="#6750A4"/>
</svg>
            )
            break; 
        case 'search': 
            return (
                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.14 15.905L26.735 24.5L24.5 26.735L15.905 18.14C14.3 19.295 12.365 20 10.25 20C4.865 20 0.5 15.635 0.5 10.25C0.5 4.865 4.865 0.5 10.25 0.5C15.635 0.5 20 4.865 20 10.25C20 12.365 19.295 14.3 18.14 15.905ZM10.25 3.5C6.515 3.5 3.5 6.515 3.5 10.25C3.5 13.985 6.515 17 10.25 17C13.985 17 17 13.985 17 10.25C17 6.515 13.985 3.5 10.25 3.5Z" fill="#49454F"/>
</svg>
      
                )
            break;
        case 'trash': 
                return (
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9ZM15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5Z" fill="#CF1B1B"/>
</svg>

                )
            break;
        default:
            return null
            
    }
}

export default GlobalSvgIcons