<?php

namespace App\Entity;

use App\Repository\ContactDepartmentRepository;
use Doctrine\ORM\Mapping as ORM;
use ApiPlatform\Metadata\ApiResource;
use Symfony\Component\Serializer\Annotation\Groups;

#[ORM\Entity(repositoryClass: ContactDepartmentRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['contact-department:read']],
    denormalizationContext: ['groups' => ['contact-department:write']]
)]
class ContactDepartment
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['contact-department:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['contact-department:read', 'contact-department:write'])]
    private ?string $name = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['contact-department:read', 'contact-department:write'])]
    private ?string $description = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['contact-department:read', 'contact-department:write'])]
    private ?string $email = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['contact-department:read', 'contact-department:write'])]
    private ?string $phone = null;

    #[ORM\Column(length: 255, nullable: true)]
    #[Groups(['contact-department:read', 'contact-department:write'])]
    private ?string $head = null;

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

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;
        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;
        return $this;
    }

    public function getHead(): ?string
    {
        return $this->head;
    }

    public function setHead(?string $head): self
    {
        $this->head = $head;
        return $this;
    }
} 