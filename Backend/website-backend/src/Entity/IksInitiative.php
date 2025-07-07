<?php

namespace App\Entity;

use App\Repository\IksInitiativeRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: IksInitiativeRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['iks-initiative:read']],
    denormalizationContext: ['groups' => ['iks-initiative:write']]
)]
class IksInitiative
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['iks-initiative:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['iks-initiative:read', 'iks-initiative:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['iks-initiative:read', 'iks-initiative:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['iks-initiative:read', 'iks-initiative:write'])]
    private ?string $image = null;

    #[ORM\Column]
    #[Groups(['iks-initiative:read'])]
    private ?\DateTimeImmutable $createdAt = null;

    #[ORM\Column(length: 50)]
    #[Groups(['iks-initiative:read', 'iks-initiative:write'])]
    private ?string $status = null;

    #[ORM\Column(type: 'datetime', nullable: true)]
    #[Groups(['iks-initiative:read', 'iks-initiative:write'])]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['iks-initiative:read', 'iks-initiative:write'])]
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

    public function setStartDate(?\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getOutcomes(): ?string
    {
        return $this->outcomes;
    }

    public function setOutcomes(?string $outcomes): self
    {
        $this->outcomes = $outcomes;
        return $this;
    }
} 