        let y=0
                        let mat = [ [0,1,2],
                            [3,4,5],
                            [6,7,8]] ;
        function change(row,col) {
                let cells = document.querySelectorAll(".cell");
                x= mat[row][col];
                
                y=y+1;
                cells[x].setAttribute("onclick","test2()");
                // console.log(y)
                //first user x
                if (y%2==0){
                    mat[row][col] = "o";
                    cells[x].style = `
                    background-color: rgb(137, 237, 255);
                    background-image:url("round_symbol.png");
                    background-size:cover;
                    background-posistion:center;
                    background-repeat:no-repeat;`;
                    // console.log(mat)
                }
                else{
                    
                    mat[row][col] = "x"
                    cells[x].style = `
                    background-color: rgb(137, 237, 255);
                    background-image:url("cross_symbol.png");
                    background-size:cover;
                    background-posistion:center;
                    background-repeat:no-repeat;`;
                    // console.log(mat)
                }
            if (mat[row][0] === mat[row][1] && mat[row][0] === mat[row][2]) {
                    cells.forEach(item => item.setAttribute("onclick", ""));
                if (mat[0][col] === 'x') {
                    setTimeout(()=>alert("player 1 has own"),200);
                    }
                else {
                    setTimeout(()=>alert("player 2 has own"),200);
                    }
                    
                }
            if (mat[0][col] === mat[1][col] && mat[0][col] === mat[2][col]) {
                    cells.forEach(item => item.setAttribute("onclick", ""));
                if (mat[0][col] === 'x') {
                        setTimeout(()=>alert("player 1 has own"),200);
                        
                    }
                else {
                        setTimeout(()=>alert("player 2 has own"),200);
                    }
                }

                if (row === 0 && col === 0 || row === 2 && col === 2 || row ===1 && col === 1) {
                    if (mat[0][0] === mat[1][1] && mat[0][0] === mat[2][2]) {
                         cells.forEach(item => item.setAttribute("onclick", ""));
                        if (mat[0][col] === 'x') {
                            setTimeout(()=>alert("player 1 has own"),200);
                        }
                        else {
                            setTimeout(()=>alert("player 2 has own"),200);
                        }
                }
            }
                if( row === 0 && col === 2 || row === 2 && col === 0 || row === 1 && col === 1){
                    if (mat[0][2] === mat[1][1] && mat[0][2] === mat[2][0]) {
                        cells.forEach(item => item.setAttribute("onclick", ""));
                        if (mat[0][col] === 'x') {
                            setTimeout(()=>alert("player 1 has own"),200);
                        }
                        else {
                            setTimeout(()=>alert("player 1 has own"),200);
                        }
                }
            }
        }
            function test2() {
                alert("it is already filled choose other box please");
            }