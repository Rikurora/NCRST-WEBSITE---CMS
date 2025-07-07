<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiResource;
use App\Repository\DocumentRepository;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;
use Vich\UploaderBundle\Mapping\Annotation as Vich;

#[ORM\Entity(repositoryClass: DocumentRepository::class)]
#[ApiResource(
    normalizationContext: ['groups' => ['document:read']],
    denormalizationContext: ['groups' => ['document:write']]
)]
#[Vich\Uploadable]
class Document
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    #[Groups(['document:read'])]
    private ?int $id = null;

    #[ORM\Column(length: 255)]
    #[Groups(['document:read', 'document:write'])]
    private ?string $title = null;

    #[ORM\Column(type: 'text', nullable: true)]
    #[Groups(['document:read', 'document:write'])]
    private ?string $description = null;

    #[Vich\UploadableField(mapping: 'media_object', fileNameProperty: 'fileName')]
    #[Assert\File(
        maxSize: '10M',
        mimeTypes: [
            'application/pdf',
            'application/msword',
            'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
        ]
    )]
    private ?File $file = null;

    #[ORM\Column(length: 255)]
    #[Groups(['document:read'])]
    private ?string $fileName = null;

    #[ORM\Column(length: 255)]
    #[Groups(['document:read'])]
    private ?string $filePath = null;

    #[ORM\Column(length: 255)]
    #[Groups(['document:read'])]
    private ?string $fileType = null;

    #[ORM\Column]
    #[Groups(['document:read'])]
    private ?int $fileSize = null;

    #[ORM\Column]
    #[Groups(['document:read'])]
    private ?\DateTimeImmutable $uploadedAt = null;

    public function __construct()
    {
        $this->uploadedAt = new \DateTimeImmutable();
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

    public function setDescription(?string $description): self
    {
        $this->description = $description;
        return $this;
    }

    public function getFile(): ?File
    {
        return $this->file;
    }

    public function setFile(?File $file): self
    {
        $this->file = $file;
        if ($file) {
            $this->uploadedAt = new \DateTimeImmutable();
            $this->fileType = $file->getMimeType();
            $this->fileSize = $file->getSize();
            $this->filePath = sprintf(
                '%s/%s.%s',
                substr(md5($this->uploadedAt->format('Y-m-d H:i:s')), 0, 10),
                uniqid(),
                $file->getExtension()
            );
        }
        return $this;
    }

    public function getFileName(): ?string
    {
        return $this->fileName;
    }

    public function setFileName(?string $fileName): self
    {
        $this->fileName = $fileName;
        return $this;
    }

    public function getFilePath(): ?string
    {
        return $this->filePath;
    }

    public function setFilePath(string $filePath): self
    {
        $this->filePath = $filePath;
        return $this;
    }

    public function getFileType(): ?string
    {
        return $this->fileType;
    }

    public function setFileType(string $fileType): self
    {
        $this->fileType = $fileType;
        return $this;
    }

    public function getFileSize(): ?int
    {
        return $this->fileSize;
    }

    public function setFileSize(int $fileSize): self
    {
        $this->fileSize = $fileSize;
        return $this;
    }

    public function getUploadedAt(): ?\DateTimeImmutable
    {
        return $this->uploadedAt;
    }

    public function setUploadedAt(\DateTimeImmutable $uploadedAt): self
    {
        $this->uploadedAt = $uploadedAt;
        return $this;
    }
} 