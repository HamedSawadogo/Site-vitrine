<?php

require_once('../lib/Database.php');
class Product{

    private string $designation;
    private float $prix;
    private string $content;
    private string $imageUrl;

    private  $database;
   
    public function __construct($db)
    {
        $this->database=$db;
        $this->database->getConnection();
    }
    /**
     * recuperer la liste des articles
     */
    public function read(int $id):array{
        $sql="SELECT * FROM article WHERE id=".$id;
        $query=$this->database->prepare($sql);
        $query->execute();
        return $query;
    }


}