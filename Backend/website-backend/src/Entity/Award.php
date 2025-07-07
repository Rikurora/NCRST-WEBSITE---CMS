<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\AwardRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: AwardRepository::class)]
#[ApiResource]
class Award
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['default'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['default'])]
    private ?string $title = null;

    #[ORM\Column(length: 255)]
    #[Groups(['default'])]
    private ?string $recipient = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['default'])]
    private ?string $description = null;

    #[ORM\Column]
    #[Groups(['default'])]
    private ?\DateTimeImmutable $awardedAt = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['default'])]
    private ?string $image = null;

    public function __construct()
    {
        $this->awardedAt = new \DateTimeImmutable();
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

    public function getRecipient(): ?string
    {
        return $this->recipient;
    }

    public function setRecipient(string $recipient): self
    {
        $this->recipient = $recipient;
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

    public function getAwardedAt(): ?\DateTimeImmutable
    {
        return $this->awardedAt;
    }

    public function setAwardedAt(\DateTimeImmutable $awardedAt): self
    {
        $this->awardedAt = $awardedAt;
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
} 