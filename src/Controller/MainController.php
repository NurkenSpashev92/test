<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;

class MainController extends AbstractController
{
        #[\Symfony\Component\Routing\Annotation\Route('/', name: 'home')]
        public function index() {
        return new Response('123');
    }
}
