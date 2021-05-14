

export const detailController = (req, res) => {
    
    res.render("screens/board/detail");
};

export const editController = (req, res) => {
    res.render("screens/board/edit");
};

export const listController = (req, res) => {

    const db = req.body.connection;

    const sql = `
    select	A.board_no  AS   no,
		    A.title     AS  title,
            B.name      AS  author,
            '0'		    AS	hit,
            date_format(A.created"%Y-%m-%d")     AS  created
    from	board	A
    join	emp		B
    on	    A.author = B.m_no
    where   A.board_no=${req.query.pk}
    `;
   

    
    db.query(sql, (error, rows) => {
        console.log(rows);
        res.render(`screens/board/detail`);
    });
};


export const writeController = (req, res) => {
    res.render("screens/board/write");
};