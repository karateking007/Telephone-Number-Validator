const regex = /^(1?)(\s?)?((\((\d){3}\))|((\d){3}))((-|\s)?)(\d){3}(-|\s)?((\d){4})$/;

let telephoneCheck = (str) => {
    return regex.test(str)
}

telephoneCheck("5555555555");