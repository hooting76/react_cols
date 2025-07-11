const pool = require('./mariaDBPool');

// https://ko.javascript.info/import-export
let dao = {

    // insertUser function
    insertUser : async function(user) {

        let conn; 
        let msg;

        try {
            conn = await pool.getConnection();
            console.log("connection : ", conn);

            // https://github.com/mariadb-corporation/mariadb-connector-nodejs/blob/master/documentation/promise-api.md#close--void
            // const idx_prev = await conn.query('SELECT IDX FROM temp_user ORDER BY IDX DESC LIMIT 1;');
            // console.log("idx_prev : " + idx_prev);

            const res = await conn.query('INSERT INTO temp_user VALUES (IDX, ?, ?, ?, ?)', 
                                         [user.name, user.email, user.phone, user.description]);

            // console.log(res);
            msg = "저장 성공";

        } catch (err) {

            console.error("err :", err);
            msg = "저장 실패";

        } finally {

            if (conn == true) await conn.end();
        } //

        console.log("insertUser msg : ", msg);

        return await msg; 
    
    } // insertUser

} // class

module.exports = dao;