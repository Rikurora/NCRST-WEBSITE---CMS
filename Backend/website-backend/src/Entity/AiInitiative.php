<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\AiInitiativeRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AiInitiativeRepository::class)]
#[ApiResource]
class AiInitiative
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['default'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['default'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['default'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['default'])]
    private ?string $image = null;

    #[ORM\Column]
    #[Groups(['default'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 50)]
    #[Groups(['default'])]
    private ?string $status = null;

    #[ORM\Column(type: 'datetime')]
    #[Groups(['default'])]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['default'])]
    private ?string $outcomes = null;

    public function __construct()
    {
        $this->createdAt = new \DateTimeImmutable();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getImage(): ?string
    {
        return $this->image;
    }

    public function setImage(?string $image): self
    {
        $this->image = $image;
        return $this;
    }

    public function getCreatedAt(): ?\DateTimeImmutable
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeImmutable $createdAt): self
    {
        $this->createdAt = $createdAt;
        return $this;
    }

    public function getStatus(): ?string
    {
        return $this->status;
    }

    public function setStatus(string $status): self
    {
        $this->status = $status;
        return $this;
    }

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getOutcomes(): ?string
    {
        return $this->outcomes;
    }

    public function setOutcomes(string $outcomes): self
    {
        $this->outcomes = $outcomes;
        return $this;
    }
} 