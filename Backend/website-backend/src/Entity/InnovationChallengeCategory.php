<?php

namespace App\Entity;

use App\Repository\InnovationChallengeCategoryRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: InnovationChallengeCategoryRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['innovation-challenge-category:read']],
    denormalizationContext: ['groups' => ['innovation-challenge-category:write']]
)]
class InnovationChallengeCategory
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['innovation-challenge-category:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['innovation-challenge-category:read', 'innovation-challenge-category:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['innovation-challenge-category:read', 'innovation-challenge-category:write'])]
    private ?string $description = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getName(): ?string
    {
        return $this->name;
    }

    public function setName(string $name): self
    {
        $this->name = $name;
        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }
} 