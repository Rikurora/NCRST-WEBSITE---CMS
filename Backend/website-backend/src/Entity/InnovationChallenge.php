<?php

namespace App\Entity;

use App\Repository\InnovationChallengeRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InnovationChallengeRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['innovation-challenge:read']],
    denormalizationContext: ['groups' => ['innovation-challenge:write']]
)]
class InnovationChallenge
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['innovation-challenge:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text')]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?string $description = null;

    #[ORM\Column(type: 'datetime')]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?\DateTimeInterface $startDate = null;

    #[ORM\Column(type: 'datetime')]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?\DateTimeInterface $endDate = null;

    #[ORM\Column(length: 50)]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?string $status = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?string $requirements = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?string $prizes = null;

    #[ORM\ManyToOne(targetEntity: InnovationChallengeCategory::class)]
    #[Groups(['innovation-challenge:read', 'innovation-challenge:write'])]
    private ?InnovationChallengeCategory $category = null;

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

    public function getStartDate(): ?\DateTimeInterface
    {
        return $this->startDate;
    }

    public function setStartDate(\DateTimeInterface $startDate): self
    {
        $this->startDate = $startDate;
        return $this;
    }

    public function getEndDate(): ?\DateTimeInterface
    {
        return $this->endDate;
    }

    public function setEndDate(\DateTimeInterface $endDate): self
    {
        $this->endDate = $endDate;
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

    public function getRequirements(): ?string
    {
        return $this->requirements;
    }

    public function setRequirements(?string $requirements): self
    {
        $this->requirements = $requirements;
        return $this;
    }

    public function getPrizes(): ?string
    {
        return $this->prizes;
    }

    public function setPrizes(?string $prizes): self
    {
        $this->prizes = $prizes;
        return $this;
    }

    public function getCategory(): ?InnovationChallengeCategory
    {
        return $this->category;
    }

    public function setCategory(?InnovationChallengeCategory $category): self
    {
        $this->category = $category;
        return $this;
    }
} 