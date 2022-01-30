let password = '1_-3'

if (password.length >= 4) {
    if (password.includes('-') || password.includes('_')) {
        console.log('Пароль надёжный');
    } else {
        console.log('Пароль недостаточно надёжный');
    }
} else {
        console.log('Пароль короткий');
}

    
