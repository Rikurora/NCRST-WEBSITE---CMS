<?php

namespace App\Tests\Controller;

use App\Entity\ScienceEvent;
use App\Repository\ScienceEventRepository;
use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class ScienceEventsControllerTest extends WebTestCase
{
    private $client;
    private $entityManager;
    /** @var ScienceEventRepository */
    private $repository;

    protected function setUp(): void
    {
        $this->client = static::createClient();
        $this->entityManager = $this->client->getContainer()->get('doctrine')->getManager();
        $this->repository = $this->entityManager->getRepository(ScienceEvent::class);
    }

    public function testIndex(): void
    {
        $crawler = $this->client->request('GET', '/science/events/');
        $this->assertResponseIsSuccessful();
        $this->assertSelectorTextContains('h1', 'Science Events');
    }

    public function testNew(): void
    {
        $originalNumObjects = count($this->repository->findAll());

        $this->client->request('GET', '/science/events/new');
        $this->client->submitForm('Save', [
            'science_event[title]' => 'Test Event',
            'science_event[description]' => 'Test Description',
            'science_event[type]' => 'Conference',
            'science_event[date]' => '2025-01-01',
            'science_event[location]' => 'Test Location'
        ]);

        $this->assertResponseRedirects('/science/events/');
        $this->assertCount($originalNumObjects + 1, $this->repository->findAll());
    }

    protected function tearDown(): void
    {
        parent::tearDown();
        $this->entityManager->close();
        $this->entityManager = null;
    }
}

