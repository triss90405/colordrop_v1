<?php





class MyDB extends SQLite3 {
  function __construct() {
    $this->open('../colors.db');
  }
}
$db = new MyDB();
if(!$db){
  echo $db->lastErrorMsg();
} else {
  echo "Opened database successfully<br>";
}

$sql =<<<EOF
SELECT * from COLORS;
EOF;

$ret = $db->query($sql);
while($row = $ret->fetchArray(SQLITE3_ASSOC) ){
  echo "ID = ". $row['id'] . "<br>";
  echo "HEX = ". $row['hex'] ."<br>";
  echo "RGB = ". $row['rgb'] ."<br>";
  echo "GROUP = ".$row['color_grp'] ."<br><br>";
}
echo "Operation done successfully<br>";

$db->close();
