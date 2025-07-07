<?php

namespace App\Entity;

use App\Repository\IksCouncilMemberRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: IksCouncilMemberRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['iks-council-member:read']],
    denormalizationContext: ['groups' => ['iks-council-member:write']]
)]
class IksCouncilMember
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['iks-council-member:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['iks-council-member:read', 'iks-council-member:write'])]
    private ?string $name = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['iks-council-member:read', 'iks-council-member:write'])]
    private ?string $position = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['iks-council-member:read', 'iks-council-member:write'])]
    private ?string $bio = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['iks-council-member:read', 'iks-council-member:write'])]
    private ?string $image = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['iks-council-member:read', 'iks-council-member:write'])]
    private ?string $institution = null;

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

    public function getPosition(): ?string
    {
        return $this->position;
    }

    public function setPosition(?string $position): self
    {
        $this->position = $position;
        return $this;
    }

    public function getBio(): ?string
    {
        return $this->bio;
    }

    public function setBio(?string $bio): self
    {
        $this->bio = $bio;
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

    public function getInstitution(): ?string
    {
        return $this->institution;
    }

    public function setInstitution(?string $institution): self
    {
        $this->institution = $institution;
        return $this;
    }
} 